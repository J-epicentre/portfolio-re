import { Header } from "@/components/intro/layout/header";

interface LayoutProps {
  children: React.ReactNode;
}
const layout = ({
  children
}: LayoutProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default layout;