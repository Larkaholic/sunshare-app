import AppFromFigma from "./components/figma/AppFromFigma";

export default function Page() {
  // The original Figma-provided app component was moved into
  // src/app/components/figma/AppFromFigma.tsx to avoid colliding with Next's
  // internal `app`/`_app` naming. We now render that component here.
  return <AppFromFigma />;
}