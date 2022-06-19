export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = `Journeys Continue | ${title ?? ""}`;
  }, [title]);
};
