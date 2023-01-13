import { createCadlLibrary } from "@cadl-lang/compiler";
export const apiPatternsLibrary = createCadlLibrary({
    name: "apiPatternsLibrary",
    diagnostics: {},
});
// optional but convenient
export const { reportDiagnostic, createDiagnostic, createStateSymbol } = apiPatternsLibrary;
