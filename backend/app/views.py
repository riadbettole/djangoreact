from . models import *
from . serializer import *

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import render

import webuiapi
import base64
from PIL import Image
from io import BytesIO


# Create your views here.
    

class ClothesAPIView(APIView):
    def get(self, request):
        clothes = Clothes.objects.all()
        serializer = ClothesSerializer(clothes, many=True)
        return Response(serializer.data)


class StableDiffusion(APIView):
    def post(self, request):
        api = webuiapi.WebUIApi(host='127.0.0.1', port=7861)

        
        promptWeb  = request.data.get('promptWeb', '')
        userImage  = request.data.get('imageOfUser', '')
        
        image_data = base64.b64decode(userImage[22:])
        image_buffer = BytesIO(image_data)
        pil_image = Image.open(image_buffer)

                #mask

        # Create a new image with a black background
        mask = Image.new("RGBA", (800, 800), (0, 0, 0))

        # Fill the top half of the image with black color
        bottom_half = (0, 400, 800, 800)
        mask.paste((255, 255, 255, 255), bottom_half)
        mask.save("mask_image.png")
       
        
        
        result2 = api.img2img(images=[pil_image], 
                prompt=promptWeb, #1
                cfg_scale=7, #1
                styles=[""],#1
                denoising_strength=1, #1
                negative_prompt="deformed, contorted, amputee,anime, cartoon, celshade, contour-line, 3d render, fake, uncanny, surreal, cg, caricature, depiction, (((nsfw,naked)))", #1
                steps=32,#1
                resize_mode=1,
                inpainting_fill=3,
                sampler_name="Euler a",
                mask_blur=4,
                # inpainting_mask_invert=1,
                mask_image=mask,
                )
        
        processed_image_bytes = BytesIO()
        result2.image.save(processed_image_bytes, format='PNG')
        processed_image_bytes.seek(0)
        image = base64.b64encode(processed_image_bytes.read())

        return Response({'processed_image': image}, status=status.HTTP_200_OK)


