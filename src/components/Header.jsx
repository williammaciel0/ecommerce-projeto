import { useState } from 'react'
import './styles.css'
import logo from '../images/logo.svg'
import iconCart from '../images/icon-cart.svg'
import iconDelete from '../images/icon-delete.svg'
import avatar from '../images/image-avatar.png'
import iconMenu from '../images/icon-menu.svg'
import iconClose from '../images/icon-close.svg'

export const Header = ({data}) => {
    const [ stateCarrinho, setStateCarrinho ] = useState('')
    
    const mudarState = ()=> {
       setStateCarrinho( stateCarrinho === '' ? data : '')
    }

    const [ menuLateral, setMenuLateral ] = useState('hidden')
    const mudarStateMenu = () => {
        setMenuLateral(menuLateral === 'hidden' ? '' : 'hidden')
    }
    return (
            <section className=" relative py-5 flex justify-evenly items-center border-b border-[hsl(206,8%,83%)]">
                <div className={`${menuLateral} absolute w-[100%] h-[1300px] z-50 bg-[rgba(0,0,0,0.7)]`}>
                    <div className={`  flex flex-col justify-center pt-45 p-5 w-[240px] bg-amber-50 h-[1300px]`}>
                        <img onClick={mudarStateMenu} src={iconClose} className='mb-7 cursor-pointer' width={15} alt="" />
                        <p>Collections</p>
                        <p>Men</p>
                        <p>Women</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                </div>
                {
                    <img onClick={mudarStateMenu} className='sm:hidden cursor-pointer' src={iconMenu} alt="menu-hamburguer" />
                }
                <img src={logo} alt="Logo principal" />
                <ul className=" hidden sm:flex gap-10 ">
                    <a className={`cursor-pointer relative text-[hsl(219,9%,45%)] hover:text-[hsl(220,13%,13%)] transition-all `}>Collections <div className="absolute h-14 top-1 w-20 border-amber-50 border-b-4 hover:border-[hsl(26,100%,55%)] transition-all"></div></a>
                    <a className={`cursor-pointer relative text-[hsl(219,9%,45%)] hover:text-[hsl(220,13%,13%)] transition-all`}>Men <div className="absolute h-14 top-1 w-10 border-amber-50 border-b-4 hover:border-[hsl(26,100%,55%)] transition-all"></div></a>
                    <a className="cursor-pointer relative text-[hsl(219,9%,45%)] hover:text-[hsl(220,13%,13%)] transition-all">Women <div className="absolute h-14 top-1 w-15 border-amber-50 border-b-4 hover:border-[hsl(26,100%,55%)] transition-all"></div></a>
                    <a className="cursor-pointer relative text-[hsl(219,9%,45%)] hover:text-[hsl(220,13%,13%)] transition-all">About <div className="absolute h-14 top-1 w-13 border-amber-50 border-b-4 hover:border-[hsl(26,100%,55%)] transition-all"></div></a>
                    <a className="cursor-pointer relative text-[hsl(219,9%,45%)] hover:text-[hsl(220,13%,13%)] transition-all">Contact <div className="absolute h-14 top-1 w-15 border-amber-50 border-b-4 hover:border-[hsl(26,100%,55%)] transition-all"></div></a>
                </ul>
                <div className="relative flex justify-center items-center gap-9">
                    
                    {
                        stateCarrinho === {} ? '' : (<p className="absolute px-3 bg-[hsl(26,100%,55%)] rounded-2xl text-[hsl(25,100%,94%)] left-4 top-0.5">{data.quantidade}</p>)
                    }
                    <img onClick={mudarState} className="cursor-pointer v-6 sm:w-8" src={iconCart} alt="Carrinho de compras" />

                    {
                        stateCarrinho === '' ? '' : ( data.valor === undefined ? (<div className='w-55 h-40 z-50 shadow-lg rounded-[5px] absolute top-19 right-0 bg-amber-50'>
                        <p className='border-b-1 font-bold text-[14px] border-[hsl(220,14%,75%)] pb-3 pt-2 pl-2' >Cart</p>
                        <div className='flex flex-col justify-center gap-3 mt-12 items-center'>
                            <p className='text-[12px] text-[hsl(219,9%,45%)]'>Your cart is empty.</p>
                        </div>
                    </div>) : (<div className='w-55 h-40 shadow-lg rounded-[5px] absolute top-19 right-0 z-50 bg-amber-50'>
                        <p className='border-b-1 font-bold text-[14px] border-[hsl(220,14%,75%)] pb-3 pt-2 pl-2' >Cart</p>
                        <div className='flex flex-col justify-center gap-3 mt-4 items-center'>
                            <div className='flex gap-1 items-center'>
                                <img className='rounded-[5px]' width={35} src={data.imagem} alt="image produto" />
                                <div>
                                    <p className='text-[hsl(219,9%,45%)] text-[11px]'>Fall Limited Edition Sneakers</p>
                                    <p className='text-[hsl(219,9%,45%)] text-[11px]'>$125.00 x {data.quantidade} <span className='text-[hsl(0,0%,0%)] font-bold'>${data.valor}.00</span></p>
                                </div>
                                <img src={iconDelete} alt="Remover item" />
                            </div>
                            <button className='bg-[hsl(26,100%,55%)] text-[9px] font-bold w-48 py-3 rounded-[8px]'>Checkout</button>
                        </div>
                    </div>)  )
                    }
                    
                    
                    <a href=""><img className=" w-6 sm:w-14 hover:border-2 border-[hsl(26,100%,55%)] rounded-[50%] " src={avatar} alt="Avatar do usuário" /></a>
                </div>
            </section>
    )
}