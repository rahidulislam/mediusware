from dataclasses import field
from pyexpat import model
from rest_framework import serializers
from product.models import Variant, Product, ProductImage, ProductVariant, ProductVariantPrice






class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = '__all__'

class ProductVariantSerializer(serializers.ModelSerializer):
    #item_variant = VariantSerializer(many=True, read_only=True)
    class Meta:
        model = ProductVariant
        fields = "__all__"

class VariantSerializer(serializers.ModelSerializer):
    item_variant = ProductVariantSerializer(many=True, read_only=True)
    class Meta:
        model = Variant
        fields = ('id', 'title', 'item_variant')

class ProductVariantPriceSerializer(serializers.ModelSerializer):
    variant = ProductVariantSerializer(many=True, read_only=True)
    class Meta:
        model=ProductVariantPrice
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    product_variant_price = ProductVariantPriceSerializer(many=True,read_only=True)
    item_variant = ProductVariantSerializer(many=True, read_only=True)
    #variant = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = Product
        fields = ('id', 'title','sku', 'description', 'product_variant_price', 'item_variant',)
        #fields = "__all__"
        

   

