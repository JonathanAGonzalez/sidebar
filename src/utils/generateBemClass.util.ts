/**
 * Generates CSS classes following the BEM methodology (Block Element Modifier)
 * @param block - The main block name
 * @param element - The element name (optional)
 * @param modifier - The modifier (optional)
 * @returns The generated CSS class following BEM convention
 * @returns EXAMPLE: 'button__text
 */
export function generateBemClass(
  block: string,
  element?: string,
  modifier?: string
): string {
  let className = block;

  // Add element if provided
  if (element) {
    className += `__${element}`;
  }

  // Add modifier if provided
  if (modifier) {
    className += `--${modifier}`;
  }

  return className;
}

/**
 * Combines BEM classes with additional classes
 * @param block - The main block name
 * @param element - The element name (optional)
 * @param modifier - The modifier (optional)
 * @param additionalClasses - Additional classes (optional)
 * @returns String with all classes combined
 * @returns EXAMPLE: 'button__text--primary custom-class another-class'
 */
export function combineBemClasses(
  block: string,
  element?: string,
  modifier?: string,
  additionalClasses?: string[]
): string {
  const bemClass = generateBemClass(block, element, modifier);
  const allClasses = [bemClass];

  if (additionalClasses) {
    allClasses.push(...additionalClasses);
  }

  return allClasses.join(' ');
}
