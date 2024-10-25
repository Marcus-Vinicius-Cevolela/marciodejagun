import Timer from "@/components/timer";


const Header = () => {
    return (
        <header className="w-full bg-red-800 text-white py-3 shadow-lg">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center">
                    <h2 className="font-garamond text-xl text-amber-400 md:text-lg font-bold lg:pt-4">
                        Pré-Venda do Livro
                    </h2>
                    <h1 className="font-garamond text-base text-amber-400 md:text-xl font-bold lg:pb-3">
                        FILOSOFIA DESCOLONIAL DO CANDOMBLÉ NAGÔ
                    </h1>
                </div>
                <Timer />   
            </div>
        </header>
    );
};

export default Header;
