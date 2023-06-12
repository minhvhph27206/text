import classNames from "classnames/bind";
import Myservices from "../../../components/Main/MyServices";
import styles from "../../../components/Main/main.module.scss";
import stylesService from "../../../components/Main/MyServices/myservice.module.scss";
import stylesProject from "./MyProject.module.scss";
import { useEffect,myProject,useState } from "../../../utilities";
import postMethod from "./postMethod";
import deleteMethod from "./deleteMethod";


const cx = classNames.bind(styles);
const cs = classNames.bind(stylesProject);
const cv = classNames.bind(stylesService);

const MyProject =(column)=>{
    
    const fetchData = ()=>{
        fetch("http://localhost:3000/myProject")
        .then((response)=>{
         return response.json()
        })
        .then((data)=>{
         setData(data);
        })  
    }
   

    
    const [data,setData] = useState(myProject);
    
    useEffect(()=>{
        
        fetchData()
                  
     
    },[])

    useEffect(()=>{
        const infoHidden = document.querySelectorAll(`.${cs("info-hidden")}`);
        const myProjectBlocks = document.querySelectorAll(`.${cs("my-project-block")}`);

        myProjectBlocks.forEach((myProjectBlock,index)=>{
            myProjectBlock.addEventListener("mouseover",(e)=>{
                infoHidden[index].classList.add(`${cs('active-info-hidden')}`);

            })

            myProjectBlock.addEventListener("mouseout",(e)=>{
                infoHidden[index].classList.remove(`${cs('active-info-hidden')}`);
                
            })
        })
        

        const myFormProject = document.querySelector(`.${cs(`my-project-${column.data.id}`)}`);
        
        myFormProject.addEventListener("click",(e)=>{
            const clicked = e.target;
            if(clicked.classList.contains(`${cs('source')}`)){
                const hrefSource = clicked.getAttribute('href');
                window.location.href = hrefSource
            }
            else if(clicked.classList.contains(`${cs('link')}`)){
                const hrefSource = clicked.getAttribute('href');
                window.location.href = hrefSource
            }
            else if(clicked.classList.contains(`${cs('remove')}`)){
                const id = clicked.dataset.id;
                deleteMethod(id,function(){
                    fetchData()
                })

            }
        })


        const form = document.querySelector(`.${cs('form-project')}`);
        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            let name = document.querySelector(`.${cs('name-input')}`).value;
            name = name != "" ? name : "null"
            let desc = document.querySelector(`.${cs('desc-input')}`).value;
            desc = desc != "" ? desc : "Lorem ipsum"
            const source = document.querySelector(`.${cs('source-input')}`).value;
            const link = document.querySelector(`.${cs('link-input')}`).value;
            const image = document.querySelector(`.${cs('img-input')}`).value;
            const newData = {
                name,
                desc,
                link,
                source,
                image,
            }
            postMethod(newData,function(){
                
                fetchData()
            })
             
            
        })



      
    })
                                      
    

    return `<div class=${cx('main')}>
                <div class=${cs('contain-form-project')}>
                    <form class=${cs('form-project')}> 
                        <label>name</label>
                        <input class=${cs('name-input')} type="text"  placeholder="name-input" />
                        <label>Description</label>
                        <input class=${cs('desc-input')} type="text"   placeholder="desc-input" />
                        <label>Image</label>
                        <input class=${cs('img-input')} type="text" placeholder="img-input" />
                        <label>Source</label>
                        <input class=${cs('source-input')} type="text"  placeholder="source-input"/>
                        <label>Link</label>
                        <input class=${cs('link-input')} type="text" placeholder="link-input" />
                       <button type="submit" class=${cs('submit-form')}>
                            Submit
                       </button>
                    </form>
                </div>  
                
                <div class=${cs(`my-project-${column.data.id}`)} >
                

                ${data.map((pro)=>{
                    const {id,name,image,desc,link,source} = pro;
                    return `<div class=${cs("my-project-block")}>
                    <img src=${image} />
                    <div class=${cs("info-hidden")}>
                        <div class=${cs('info-hidden__title')}>${name}</div>
                        <div class=${cs('info-hidden__desc')}>${desc}</div>
                        <div class=${cs('info-hidden__source')}>
                            <div class=${cs('source')} href=${source}>Source Code</div>
                        </div>
                        <div class=${cs('info-hidden__link')} >
                            <div class=${cs('link')} href="${link}">Link Web </div>
                        </div>
                        
                    </div>
                </div>`
                }).join("")}
                    
                   
                 </div>
    
                    
                    <footer class=${cx('footer')}>
                        <span class=${cx('footer-block')}>© 2020 Artur Carter</span>
                        <span class=${cx('footer-block')}>Template author:  Nazar Miller</span>
                    </footer>

                                        
            </div>`;
}
export default MyProject;