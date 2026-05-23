import './styles.css'
import { useEffect, useState } from "react"
export const PgCompras = ({buscarValores}) => {
    const [ imagemDestaque, setImagemDestaque ] = useState('http://localhost:5173/public/images/image-product-1.jpg')
    const imagemSelecionada = (caminho) => {
        setImagemDestaque(caminho)
    }

    const [statusSeta, setStatusSeta] = useState(0)
   
    const passagemSeta = (id)=> {
        const enderecos = ['http://localhost:5173/public/images/image-product-1.jpg','http://localhost:5173/public/images/image-product-2.jpg','http://localhost:5173/public/images/image-product-3.jpg','http://localhost:5173/public/images/image-product-4.jpg']
        if(id === 'previous' && statusSeta > 0){
            const result = statusSeta - 1
            setStatusSeta(result)
            setImagemDestaque(enderecos[result])
        } else if(id === 'next' && statusSeta < 3){
            const result = statusSeta + 1
            setStatusSeta(result)
            setImagemDestaque(enderecos[result])
        } else {
            setStatusSeta(0)
            setImagemDestaque('http://localhost:5173/public/images/image-product-1.jpg')   
        }
        
        
    }

    const [count, setCount] = useState(1)
    const alterarContador = (operador) => {
        if (operador === '-'){
            if(count > 1){
                const valor = count - 1
                setCount(valor)
            } else {
                setCount(valor)
            }
            
        } else if(operador === '+') {
            const valor = count + 1
            setCount(valor)
        }

    }

    const [produto, setProduto] = useState(125.00)
    const alterarPrecoProduto = () => {
        const total = 125 * count
        setProduto(total)
        buscarValores({valor: total, quantidade: count, imagem: imagemDestaque})
    }
    
    const [ carrossel, setCarrossel ] = useState('fechado')
    const statusCarrossel = ()=> {
        setCarrossel(carrossel === 'fechado' ? 'aberto' : 'fechado')
    }
    
    return (
        <section className={`relative flex my-15 justify-evenly items-center`}>
            <div className="flex flex-col gap-3">
                { imagemDestaque !== '' ? (<img onClick={statusCarrossel} src={imagemDestaque} width={400} className="cursor-pointer rounded-2xl" alt="produto-1" />) : ""}
                <div className="flex gap-2 cursor-pointer">
                    <img onClick={(e)=>{imagemSelecionada(e.target.src)}} src="../../public/images/image-product-1.jpg" width={90} alt="produto-1" className={`rounded-2xl hover:opacity-50 transition-all ${imagemDestaque === 'http://localhost:5173/public/images/image-product-1.jpg' ? 'selecionado' : ''}`} />
                    <img onClick={(e)=>{imagemSelecionada(e.target.src)}} src="../../public/images/image-product-2.jpg" width={90} alt="produto-2" className={`rounded-2xl hover:opacity-50 transition-all ${imagemDestaque === 'http://localhost:5173/public/images/image-product-2.jpg' ? 'selecionado' : ''} `} />
                    <img onClick={(e)=>{imagemSelecionada(e.target.src)}} src="../../public/images/image-product-3.jpg" width={90} alt="produto-3" className={`rounded-2xl hover:opacity-50 transition-all ${imagemDestaque === 'http://localhost:5173/public/images/image-product-3.jpg' ? 'selecionado' : ''} `} />
                    <img onClick={(e)=>{imagemSelecionada(e.target.src)}} src="../../public/images/image-product-4.jpg" width={90} alt="produto-4" className={`rounded-2xl hover:opacity-50 transition-all ${imagemDestaque === 'http://localhost:5173/public/images/image-product-4.jpg' ? 'selecionado' : ''} `} />
                </div>
            </div>
            <div className="flex flex-col gap-2 w-100">
                <p className="text-[hsl(219,9%,45%)] font-bold">SNEAKER COMPANY</p>
                <p className="text-5xl font-bold"> Fall Limite Sneakers</p>
                <p className="text-[hsl(219,9%,45%)] my-5">These low-profile sneakers are your perfect casual wear
                    companion. Featuring a durable rubber outer sole, they'll
                    wichstand everything the weather can offer.
                </p>
                <p className="font-black text-2xl">${produto}.00 <span className="bg-black text-amber-50 px-2 py-1 rounded-[7px] text-[16px]">50%</span> </p>
                <p className="line-through">$250.00</p>
                <div className="flex gap-2">
                    <div className="flex">
                        <button onClick={(e)=>{alterarContador(e.target.id)}} id="-" className="bg-[hsl(223,64%,98%)] hover:bg-[hsl(231,45%,94%)] cursor-pointer rounded-l-2xl px-4 py-2"><img src="/public/images/icon-minus.svg" alt="menos" /></button>
                        <p className="px-4 py-2 bg-[hsl(223,64%,98%)]">{count}</p>
                        <button onClick={(e)=>{alterarContador(e.target.id)}} id="+" className="bg-[hsl(223,64%,98%)] hover:bg-[hsl(231,45%,94%)] cursor-pointer rounded-r-2xl px-4 py-2"><img src="/public/images/icon-plus.svg" alt="menos" /></button>
                    </div>
                    <button onClick={alterarPrecoProduto} className="flex items-center justify-center cursor-pointer px-15 rounded-[9px] gap-2 bg-[hsl(26,100%,55%)]"><img width={20} src="/public/images/icon-cart.svg" alt="" /> Add to cart</button>
                </div>
            </div>
            <div className={` ${carrossel === 'aberto' ? '' : 'hidden' } flex flex-col justify-center gap-2 items-center absolute w-full h-[200%] bg-[rgba(0,0,0,0.7)]`} >
                <div className="flex w-100">
                    <img onClick={statusCarrossel} className="pl-96 cursor-pointer" src="/public/images/icon-close.svg" alt="" />
                </div>
                <div className="flex flex-col gap-3">
                { imagemDestaque !== '' ? (<div className="relative flex justify-center items-center ">
                    <img onClick={(e)=>{passagemSeta(e.target.id)}} id='previous' className="absolute cursor-pointer bg-amber-50 right-95 p-3 rounded-[50%] active:bg-[hsl(26,100%,72%)] transition-all" src="/public/images/icon-previous.svg" alt="previous" />
                    <img src={imagemDestaque} width={400} className={`rounded-2xl`} alt="produto" />
                    <img onClick={(e)=>{passagemSeta(e.target.id)}} id='next' className="absolute cursor-pointer bg-amber-50 left-95 p-3 rounded-[50%] active:bg-[hsl(26,100%,72%)] transition-all" src="/public/images/icon-next.svg" alt="next" />
                </div> ) : ""}
                <div className="flex gap-2 cursor-pointer">
                    <img onClick={(e)=>{imagemSelecionada(e.target.src)}} src="/public/images/image-product-1.jpg" width={90} alt="produto-1" className={`rounded-2xl hover:opacity-50 transition-all ${imagemDestaque === 'http://localhost:5173/public/images/image-product-1.jpg' ? 'selecionado' : ''} `} />
                    <img onClick={(e)=>{imagemSelecionada(e.target.src)}} src="/public/images/image-product-2.jpg" width={90} alt="produto-2" className={`rounded-2xl hover:opacity-50 transition-all ${imagemDestaque === 'http://localhost:5173/public/images/image-product-2.jpg' ? 'selecionado' : ''} `} />
                    <img onClick={(e)=>{imagemSelecionada(e.target.src)}} src="/public/images/image-product-3.jpg" width={90} alt="produto-3" className={`rounded-2xl hover:opacity-50 transition-all ${imagemDestaque === 'http://localhost:5173/public/images/image-product-3.jpg' ? 'selecionado' : ''} `} />
                    <img onClick={(e)=>{imagemSelecionada(e.target.src)}} src="/public/images/image-product-4.jpg" width={90} alt="produto-4" className={`rounded-2xl hover:opacity-50 transition-all ${imagemDestaque === 'http://localhost:5173/public/images/image-product-4.jpg' ? 'selecionado' : ''} `} />
                </div>
            </div>
                
            </div>
        </section>
    )
}