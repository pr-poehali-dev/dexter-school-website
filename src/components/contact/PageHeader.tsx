interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <header className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">{title}</h1>
        <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </header>
  );
};

export default PageHeader;
