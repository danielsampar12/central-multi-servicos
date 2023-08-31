export function Header() {
  return (
    <div className="HeaderContainer py-8 px-28 bg-header-grey bg-opacity-100 w-full grid grid-cols-3">
      <div className="item1 col-span-1 flex items-center justify-start">
        <p className="Logo text-header-text text-3xl font-medium tracking-wide">
          Logo
        </p>
      </div>

      <div className="item2 col-span-1 flex items-center justify-center gap-16">
        <a
          href="#section3"
          className="Products font-europa text-header-text text-2xl font-normal tracking-header"
        >
          Produtos
        </a>
        <a className="Benefits font-europa text-header-text text-2xl font-normal tracking-header">
          Benefícios
        </a>
        <a className="AboutUs font-europa text-header-text text-2xl font-normal tracking-header">
          Sobre nós
        </a>
      </div>

      <div className="item3 col-span-1 flex items-center justify-end">
        <button
          type="button"
          className="ContactUsButton w-52 h-12 rounded-3xl px-10 py-4 gap-2 inline-flex items-center justify-center bg-gradient-to-r from-0.17% from-cms-green via-62.04% via-cms-light-blue to-100% to-cms-blue"
        >
          <p className="ContactUs text-white text-xl font-medium tracking-wide">
            Fale conosco
          </p>
        </button>
      </div>
    </div>
  )
}
