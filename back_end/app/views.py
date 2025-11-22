from .models import Message
from .serializers import MessageSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view



@api_view(['POST'])
def send_msg(req):
    user = req.data.get('user')
    text = req.data.get('text')

    if not user or not text:
        return Response({'error': "'user' e 'text' são obrigatórios!"}, status=status.HTTP_400_BAD_REQUEST)
    
    if user == "A":
        reply = "Olá Usuário A! Recebemos sua mensagem e responderemos em breve. 😊"
    elif user == "B":
        reply = "Olá Usuário B! Obrigado por entrar em contato. Responderemos em breve. 🚀"
    else:
        reply = "Olá! Recebemos sua mensagem."
    
    message = Message.objects.create(
        user=user,
        text=text,
        response=reply
    )

    return Response(MessageSerializer(message).data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def history (req, user):
    messages = Message.objects.filter(user=user).order_by('-timestamp')
    return Response(MessageSerializer(messages, many=True).data)


@api_view(['DELETE'])
def limpar_historico(req, user):
  
    count, _ = Message.objects.filter(user=user).delete()
    return Response(
        {"message": f"{count} mensagens apagadas para o usuário {user}."},
        status=status.HTTP_200_OK
    )