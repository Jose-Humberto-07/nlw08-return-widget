import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';


/**
 * 
 * exemplos => propriedades
 * 
 * type testType = {
    text: string
}

function Teste(props: testType) {
    return <button>{props.text}</button>;
}

 */

export function Widget() {
   /**
    * exemplo => estado
    * 
    *  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

    function toggleWidgetVisiblity() {
        setIsWidgetOpen(!isWidgetOpen);
    }
    */

    // no tawind o uma unidade de tamanho é 1/4 de um REM o seja 1 = 4px.
    return (
        <Popover className='absolute bottom-5 right-5'>

            <Popover.Panel>Hello word</Popover.Panel>


           <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots className='w-6 h-6'/>


                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    <span className='pl-2'></span>

                    Feedback
                </span>
           </Popover.Button>
        </Popover>
    )
}
