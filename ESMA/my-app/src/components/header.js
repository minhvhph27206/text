import { postList } from '../dataFake'


const Header=()=>{
    return`
     <header>
        <nav>
            <ul>
             
            ${menuList.map(function (nemu) {
                return `
                <li><a href="${menu.path}">${menu.name}</a></li>     
            </ul>   
            </div>
            `
            }).join("")}
        </nav>
        <img src="https://picsum.photos/1200/500"/>
    </header>

    `
}
export default Header;

