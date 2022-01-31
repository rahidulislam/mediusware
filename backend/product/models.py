from django.db import models

# Create your models here.
class Variant(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title



class Product(models.Model):
    title = models.CharField(max_length=255)
    sku = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class ProductImage(models.Model):
    product = models.ForeignKey(Product,  on_delete=models.CASCADE, related_name="product_image")
    image = models.ImageField(upload_to='product/', blank=True)



class ProductVariant(models.Model):
    varint_name = models.CharField(max_length=255)
    variant = models.ForeignKey(Variant, on_delete=models.SET_NULL, blank=True, null=True, related_name='item_variant')
    product = models.ForeignKey(Product,  on_delete=models.SET_NULL, blank=True, null=True, related_name="product_variant")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.varint_name

class ProductVariantPrice(models.Model):
    product = models.ForeignKey(Product,  on_delete=models.CASCADE, related_name="product_variant_price")
    variant = models.ManyToManyField(ProductVariant)
    price = models.DecimalField(max_digits=9, decimal_places=2, default=0.00)
    stock = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.product.title+" "+self.variant.varint_name
