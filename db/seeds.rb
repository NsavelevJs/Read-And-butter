# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@user = User.create!(username:'NickS', password:'yesorno')
@user = User.create!(username:'ColinM', password:'yesoryes')
@user = User.create!(username:'BryceL', password:'noorno')

@article = Article.create!(title:'Who are you today?',content:'Ut in qui amet amet duis excepteur id ipsum excepteur proident velit aute occaecat ex. Est irure labore anim cupidatat irure voluptate id deserunt do officia reprehenderit. Eu excepteur duis consectetur ad minim non nisi reprehenderit amet.',img_url:'https://i.imgur.com/LVyQbPX.jpg')
@article = Article.create!(title:'= vs == vs ===',content:'Ut in qui amet amet duis excepteur id ipsum excepteur proident velit aute occaecat ex. Est irure labore anim cupidatat irure voluptate id deserunt do officia reprehenderit. Eu excepteur duis consectetur ad minim non nisi reprehenderit amet.',img_url:'https://i.imgur.com/3mYcQec.png')
@article = Article.create!(title:'What is a byte?',content:'Ut in qui amet amet duis excepteur id ipsum excepteur proident velit aute occaecat ex. Est irure labore anim cupidatat irure voluptate id deserunt do officia reprehenderit. Eu excepteur duis consectetur ad minim non nisi reprehenderit amet.',img_url:'https://i.imgur.com/9By4veO.jpg')