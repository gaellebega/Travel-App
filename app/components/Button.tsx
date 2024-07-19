
type Buttonprops = {
  type:'button' | 'submit';
  title:string;
  icon?:string;
  // variant:'bg-blue-300'
}
const Button = ({type,title,icon,/*variant*/}:Buttonprops) => {
  return (
    //CLASSNAME OF THE BUTTON IS GOING OTO HAVE A DYNAMIC TEMPLATE SRING ``
<button type={type} className={`flex items-center gap-3 rounded-full border  cursor-pointer text-white text-bold bg-green-90 hover:bg-black  p-1`}>
  {icon && <img src='/visitrwanda/v5.jpg' width={24} height={24}/>}
  <label className='bold-16 whitespace-nowrap'>{title}</label>
</button>
  )
}

export default Button
