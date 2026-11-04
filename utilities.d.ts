export declare const packageNameContainsColonError = "Package name should not include \":\" character.";
export declare const scopedPackageNameSlashError = "Scoped package names should include one and only one \"/\".";
export declare const nonScopedPackageNameSlashError = "Package names should not include \"/\".";
/**
 * Tests if a package name is valid.
 * @param packageName - The name of the package to test.
 * @returns An error message if the package name is invalid, otherwise an empty string.
 */
export declare function testIfPackageNameIsValid(packageName: string): string;
