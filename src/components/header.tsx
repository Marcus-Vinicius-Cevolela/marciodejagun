import Timer from "@/components/timer";

const Header = () => {
    return (
        <header className="w-full bg-red-800 text-white py-4 shadow-lg">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left mb-4 md:mb-0">
                    Pré-Venda Filosofia Descolonial
                </h1>
                <Timer />
            </div>
        </header>
    );
};

export default Header;
