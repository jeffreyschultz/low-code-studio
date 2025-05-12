import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return redirect("/builder");
};

export default function Index() {
  // This component will not be rendered due to the redirect.
  // You can keep it minimal or remove it if you are sure it won't be used.
  return null;
}
