import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";




export function Subscribe(){
   const navigate = useNavigate() //direcionando o usuario para a tela event

   const [name, setName] = useState(''); //coletando as informações dos input
   const [email, setEmail] = useState('');

   const [createSubscriber, { loading }] = useCreateSubscriberMutation() //useMutation Ele devolve duas coisas a função para realizar a mutation, o loading e true ou false.

   function handleSubscribe(event:FormEvent){ //adicionando biblioteca formEvent para o event
     event.preventDefault();

     createSubscriber({
        variables:{
            name,
            email,
        }
     })

    navigate('/event') //rota para o direciaonal para o cliente 

   }

    return(
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            
            <div className="w-full max-w-[1200px] flex items-center justify-between mt-48 mx-auto">
                <div className="max-w-[900px]">
                

                    <h1 className="mt-1 text-[2.5rem] leading-tight">
                    A plataforma de <strong className="text-blue-500">Eventos Virtual</strong> com mais interação <strong className="text-blue-500"> Online e Offline.</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        ...
                    </p>
                </div>
                
                <div className="p-10 bg-gray-700 border border-blue-500 rounded">
                    <strong className="text-3xl mb-7 block text-blue-500 ">Cadastro</strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-3 w-full">
                        <input 
                        className="bg-gray-900 rounded px-20 h-14"
                        type="text" 
                        placeholder="Seu nome Completo" 
                        onChange={event => setName(event.target.value)} //apois o event osnChange sera coletado o valor para target
                        />
                        <input 
                        className="bg-gray-900 rounded px-20 h-14"
                        type="email" 
                        placeholder="Digite seu E-mail"
                        onChange={event => setEmail(event.target.value)} 
                        />

                        <button
                            type="submit"
                            disabled={loading} //evita o usuario ficar apertando o butão varias vezes, apois o primeiro clique é desativado.
                            className="mt-4 bg-green-900 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Entrar
                        </button>
                    </form>

                </div>

            </div>
            {/*<img src="/src/assets/deskto.png" className="mt-0" alt="" />*/}
            
        </div>
    );
}