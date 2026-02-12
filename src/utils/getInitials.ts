export interface InitialOptions {
  maxLength?: number;
  uppercase?: boolean;
  fallback?: string;
}

export const getInitials = (
  name: string,
  options: InitialOptions = {}
) => {
  const {
    maxLength = Infinity,
    uppercase = true,
    fallback = "",
  } = options;

  if (typeof name !== "string") return fallback;

  const trimmed = name.trim();
  if (!trimmed) return fallback;

   const processed = trimmed
    .replace(/[-.']/g, " ")
    .replace(/[^a-zA-Z\s]/g, "");

 
  const words=processed.split(/\s+/).map((word)=>word[0]).join("")
  
  
  return uppercase?words.slice(0,maxLength).toUpperCase():words.slice(0,maxLength)
 
};
