import { Link } from "react-router-dom"
import { FiUser, FiLogIn } from "react-icons/fi"
import logo from "../../assets/Logo2.png"

export function Header() {

  const signed = false;
  const loadingAuth = false;

  return (
    <div className="w-full flex flex-col items-center drop-shadow h-16 justify-center bg-white">
      <header className="w-full flex justify-between px-4 max-w-7xl items-center">
          <Link to={"/"} className="w-[100px] p-0 m-0">
            <img src={logo} alt="Logo" />
          </Link>

          {!loadingAuth && signed && (
            <Link to={"/dashboard"}>
              <div className="border-1 rounded-full p-1">
                <FiUser size={24}>
                </FiUser>
              </div>
          </Link>
          )}

          {!loadingAuth && !signed && (
            <Link to={"/login"}>
            <div className="border-1 rounded-full p-1">
              <FiLogIn size={24}>
              </FiLogIn>
            </div>
          </Link>
          )}
      </header>
    </div>
  )
}