import { CheckCircle, Lock } from 'phosphor-react' //dependencias icones 
import { isPast, format } from 'date-fns' //dependencias de formatos de datas 
import ptBR from 'date-fns/locale/pt-BR' //dependencias de datas em ptBR
import { Link, useParams } from 'react-router-dom'; //dependencias link de rotas e parametros
import classNames from 'classnames'; //lib de class para moduficar o css com um event

interface lessonProps{
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class'; //vai receber uma do tipo Aula Live ou class
}

export function Lesson(props: lessonProps){
    const { slug } = useParams<{ slug: string}>() //criando uma constante para uma condição no final da função (o Slug tem acesso da aula ativa)

    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h 'mm", { //formato de data do date-fns
        locale: ptBR, //importando o modo ptbr
    })

    const isActiveLesson = slug === props.slug; //"isActiveLesson" => se o slug for igual ao props.Slug quer dizer que essa aula é a aula ativa Eu quero mudar alguns CSS

    return(
        <Link to={`/event/lesson/${props.slug}`} className="group"> 
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>

            <div className={classNames(`rounded border border-gray-500 p-4 mt-2 group-hover:border-blue-900`,{ //Com a 'lib classNames' aqui é a classe que nunca muda
                      'bg-blue-900' : isActiveLesson, // quando o 'isActiveLesson' estiver ativo vai ser aplicado a 'classe bg-gree-500'
            })} > 
                <header className="flex items-center justify-between">  
                {isLessonAvailable ? (
                
                    <span className={classNames('text-sm font-medium flex items-center gap-2',{
                        'text-white' : isActiveLesson, // se tiver ativa
                        'text-blue-500' : !isActiveLesson,// se não estiver ativa
                    })}>
                    <CheckCircle size={20}/>
                      Conteúdo liberado
                    </span>
                    
                    ) : (
                    
                    <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                    <Lock size={20} />
                      Em breve
                    </span>                    
                    )}                   
                   
                   <span className={classNames('text-xs rounded py-[0.125rem] px-2 text-white border font-bold',{
                       'border-white' : isActiveLesson, // se tiver ativa
                       'border-blue-400' : !isActiveLesson,// se não estiver ativa
                   })}>
                   {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className={classNames(' mt-5 block',{ //class que nunca muda
                    'text-white' : isActiveLesson, // se tiver ativa
                    'text-gray-200' : !isActiveLesson,// se não estiver ativa
                 })}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}