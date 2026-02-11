const LOAD_STATE_PREFIX = "page_loaded_";

/**
 * Checks if a specific page has been loaded before
 * @param pathname - the page path (e.g., "/home", "/about")
 * @returns boolean - true if this page has been loaded before, false if it's the first load
 */
export const hasPageLoadedBefore = (pathname: string): boolean => {
  if (typeof window === "undefined") return false;
  const key = `${LOAD_STATE_PREFIX}${pathname}`;
  return localStorage.getItem(key) === "true";
};

/**
 * Marks a specific page as having been loaded
 * Should be called after the preloader completes for that page
 * @param pathname - the page path (e.g., "/home", "/about")
 */
export const markPageAsLoaded = (pathname: string): void => {
  if (typeof window === "undefined") return;
  const key = `${LOAD_STATE_PREFIX}${pathname}`;
  localStorage.setItem(key, "true");
};

/**
 * Resets the load state for a specific page (useful for testing)
 * @param pathname - the page path (e.g., "/home", "/about")
 * @param silent - if true, doesn't log to console (default: false)
 */
export const resetPageLoadState = (pathname: string, silent = false): void => {
  if (typeof window === "undefined") return;
  const key = `${LOAD_STATE_PREFIX}${pathname}`;
  localStorage.removeItem(key);
  if (!silent) {
    // console.log(`Load state for ${pathname} has been reset.`);
  }
};

/**
 * Resets the load state for all pages (useful for global testing)
 * @param silent - if true, doesn't log to console (default: false)
 */
export const resetAllPageLoadStates = (silent = false): void => {
  if (typeof window === "undefined") return;
  const keysToRemove: string[] = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(LOAD_STATE_PREFIX)) {
      keysToRemove.push(key);
    }
  }

  keysToRemove.forEach(key => localStorage.removeItem(key));

  if (!silent) {
    // console.log(`All page load states have been reset (${keysToRemove.length} pages).`);
  }
};
