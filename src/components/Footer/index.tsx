import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-white text-zinc-500 h-min-56 pt-16 pb-5">
      <div className="container h-full grid grid-cols-1 md:grid-cols-2 px-3">
        <div className="flex flex-col h-full justify-between">
          <div className="flex justify-start">
            <div className="relative w-8 md:w-11">
              <Image src="/img/logo.png" alt="Logo" width={1000} height={1000} />
            </div>
            <h2 className="text-2xl md:text-4xl font-semibold mb-4 tracking-tighter">Imobiliária Palmeira Real</h2>
          </div>
          <p className="text-xl font-light">contato@imobiliaria.com</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-zinc-600 text-lg md:text-xl font-semibold my-3">Endereço</h3>
            <p className="text-lg md:text-xl font-light">Rua Qualquer, 123, Qualquer Cidade, Estado, País</p>
            <h3 className="text-zinc-600 text-lg md:text-xl font-semibold my-3">Telefone</h3>
            <p className="text-lg md:text-xl font-light">(00) 1234-5678</p>
          </div>
          <div>
          </div>
        </div>
      </div>
      <p className="text-center md:text-right mt-5 md:mt-10">© {new Date().getFullYear()} Imobiliária Palmeira Real. Todos os direitos reservados.</p>
    </footer>
  );
};