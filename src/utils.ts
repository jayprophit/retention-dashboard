// utils.ts

/**
 * Converts a percentage value to a number with a fallback value.
 * @param value - The value to convert.
 * @returns The converted number or a fallback value.
 */
export const convertToNumber = (value: any, fallback: number = 0): number => {
    const number = Number(value);
    return isNaN(number) ? fallback : number;
  };
  
  /**
   * Formats a number to a fixed decimal format.
   * @param value - The number to format.
   * @param decimals - The number of decimal places to keep.
   * @returns The formatted number as a string.
   */
  export const formatDecimal = (value: number, decimals: number = 2): string => {
    return value.toFixed(decimals);
  };
  
  /**
   * A function to generate a label for a cohort based on its index.
   * @param index - The index of the cohort.
   * @returns A formatted string label.
   */
  export const getCohortLabel = (index: number): string => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[index % 12];  // Returns a label like "Jan", "Feb", etc.
  };
  
  /**
   * A simple validation function for data objects.
   * @param data - The data to validate.
   * @returns Whether the data is valid.
   */
  export const isValidData = (data: any): boolean => {
    return data && Array.isArray(data) && data.length > 0;
  };