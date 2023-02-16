import { ErrorBoundary, BuggyComponent } from "@components/ErrorBoundary";

export const BoundaryPage = () => {
  return (
    <div>
      <h1>Boundary</h1>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>

    </div>

  );
}
