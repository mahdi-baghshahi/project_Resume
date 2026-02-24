// Merge class names while skipping falsy values.
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

