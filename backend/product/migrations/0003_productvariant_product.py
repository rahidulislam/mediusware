# Generated by Django 4.0.1 on 2022-02-01 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_alter_productvariant_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='productvariant',
            name='product',
            field=models.ManyToManyField(related_name='product_variant', to='product.Product'),
        ),
    ]
