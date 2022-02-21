// possivel abstracao na normalizeActivityName ?

export default function normalizeDisciplineName(disciplineName: string | undefined): string {
  const traceIndex = disciplineName?.indexOf("(");

  const normalizedDisciplineName = (traceIndex! >= 0 ? disciplineName?.slice(0, traceIndex) : disciplineName) ?? "";

  return normalizedDisciplineName;
}
