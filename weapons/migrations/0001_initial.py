# Generated by Django 3.1.7 on 2021-03-26 18:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Weapon',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, default='weapon', max_length=255, null=True)),
                ('desc', models.TextField(blank=True, null=True)),
                ('level', models.IntegerField(blank=True, default=1, null=True)),
                ('damageLow', models.IntegerField(blank=True, null=True)),
                ('damageHigh', models.IntegerField(blank=True, null=True)),
                ('range', models.IntegerField(blank=True, null=True)),
                ('damMessage', models.CharField(max_length=255, null=True)),
                ('bonus', models.IntegerField(blank=True, default=0, null=True)),
                ('material', models.CharField(blank=True, choices=[('Wood', 'Wood'), ('Bronze', 'Bronze'), ('Iron', 'Iron'), ('Steel', 'Steel'), ('Othersteel', 'Othersteel'), ('Silver', 'Silver'), ('Obsidian', 'Obsidian'), ('Godsteel', 'Godsteel')], default='Bronze', max_length=15, null=True)),
                ('type', models.CharField(blank=True, choices=[('Knife', 'Knife'), ('Sword', 'Sword'), ('Club', 'Club'), ('Axe', 'Axe'), ('Mace', 'Mace'), ('Polearm', 'Polearm'), ('Spear', 'Spear'), ('Bow', 'Bow'), ('Ammo', 'Ammo'), ('Throwing', 'Throwing'), ('Misc', 'Misc')], default='Knife', max_length=15, null=True)),
            ],
        ),
    ]