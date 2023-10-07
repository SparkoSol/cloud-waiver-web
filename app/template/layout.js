import TemplateClient from "@/app/template/templateClient";


export default function TemplateLayout({
                                         children,
                                       }) {
  return (
    <TemplateClient>
      {children}
    </TemplateClient>
  );
}