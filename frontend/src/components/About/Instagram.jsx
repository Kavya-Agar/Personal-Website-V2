import { FiInstagram } from "react-icons/fi";

export const Instagram = () => {
    return (
        <a
                href="https://www.instagram.com/kavyaagar.ig/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center text-amber-100 hover:text-amber-400 `}
              >
                <FiInstagram className="mr-2" />
                <span className="text-sm">instagram</span>
        </a>
    )
}