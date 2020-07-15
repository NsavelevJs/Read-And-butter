# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Article.destroy_all
User.destroy_all
Tag.destroy_all

@user1 = User.create!(username:'NickS', password:'yesorno')
@user2 = User.create!(username:'ColinM', password:'yesoryes')
@user3 = User.create!(username:'BryceL', password:'noorno')
@user4 = User.create!(username:'ZainS', password:'nodefno')
@user5 = User.create!(username:'PeterC', password:'nodefno')

@tag1 = Tag.create!(title:'Philosophy')
@tag2 = Tag.create!(title:'WAT')
@tag3 = Tag.create!(title:'CS')
@tag4 = Tag.create!(title:'Whatever')
@tag5 = Tag.create!(title:'Algo Talk')
@tag6 = Tag.create!(title:'Whatever')
@tag7 = Tag.create!(title:'Aesthetic')


@article1 = Article.create!(user:@user1, tag: @tag1,title:'Who are you today?',content:'Ut in qui amet amet duis excepteur id ipsum excepteur proident velit aute occaecat ex. Est irure labore anim cupidatat irure voluptate id deserunt do officia reprehenderit. Eu excepteur duis consectetur ad minim non nisi reprehenderit amet.',img_url:'https://i.imgur.com/LVyQbPX.jpg')
@article2 = Article.create!(user:@user2, tag: @tag2,title:'= vs == vs ===',content:'Ut in qui amet amet duis excepteur id ipsum excepteur proident velit aute occaecat ex. Est irure labore anim cupidatat irure voluptate id deserunt do officia reprehenderit. Eu excepteur duis consectetur ad minim non nisi reprehenderit amet.',img_url:'https://i.imgur.com/3mYcQec.png')
@article3 = Article.create!(user:@user5, tag: @tag3,title:'What is a byte?',content:'Ut in qui amet amet duis excepteur id ipsum excepteur proident velit aute occaecat ex. Est irure labore anim cupidatat irure voluptate id deserunt do officia reprehenderit. Eu excepteur duis consectetur ad minim non nisi reprehenderit amet.',img_url:'https://i.imgur.com/9By4veO.jpg')

@article4 = Article.create!(user:@user4, tag: @tag3,title:'CS-101',content:'Ut in qui amet amet duis excepteur id ipsum excepteur proident velit aute occaecat ex. Est irure labore anim cupidatat irure voluptate id deserunt do officia reprehenderit. Eu excepteur duis consectetur ad minim non nisi reprehenderit amet.',img_url:'https://i.imgur.com/LVyQbPX.jpg')
@article5 = Article.create!(user:@user2, tag: @tag2,title:'React: to Hook or not to Hook',content:'Ut in qui amet amet duis excepteur id ipsum excepteur proident velit aute occaecat ex. Est irure labore anim cupidatat irure voluptate id deserunt do officia reprehenderit. Eu excepteur duis consectetur ad minim non nisi reprehenderit amet.',img_url:'https://i.imgur.com/3mYcQec.png')
@article6 = Article.create!(user:@user3, tag: @tag6,title:'Whatever',content:'Ut in qui amet amet duis excepteur id ipsum excepteur proident velit aute occaecat ex. Est irure labore anim cupidatat irure voluptate id deserunt do officia reprehenderit. Eu excepteur duis consectetur ad minim non nisi reprehenderit amet.',img_url:'https://i.imgur.com/9By4veO.jpg')

@article7 = Article.create!(user:@user5, tag: @tag1,title:'Poker for coders',content:'Ut in qui amet amet duis excepteur id ipsum excepteur proident velit aute occaecat ex. Est irure labore anim cupidatat irure voluptate id deserunt do officia reprehenderit. Eu excepteur duis consectetur ad minim non nisi reprehenderit amet.',img_url:'https://i.imgur.com/LVyQbPX.jpg')
@article8 = Article.create!(user:@user4, tag: @tag2,title:'Best dev setups',content:'Ut in qui amet amet duis excepteur id ipsum excepteur proident velit aute occaecat ex. Est irure labore anim cupidatat irure voluptate id deserunt do officia reprehenderit. Eu excepteur duis consectetur ad minim non nisi reprehenderit amet.',img_url:'https://i.imgur.com/3mYcQec.png')
@article9 = Article.create!(user:@user3, tag: @tag3,title:'Google It.',content:'Ut in qui amet amet duis excepteur id ipsum excepteur proident velit aute occaecat ex. Est irure labore anim cupidatat irure voluptate id deserunt do officia reprehenderit. Eu excepteur duis consectetur ad minim non nisi reprehenderit amet.',img_url:'https://i.imgur.com/9By4veO.jpg')
@article10 = Article.create!(user:@user1, tag: @tag3,title:'Why.',content:'Ut in qui amet amet duis excepteur id ipsum excepteur proident velit aute occaecat ex. Est irure labore anim cupidatat irure voluptate id deserunt do officia reprehenderit. Eu excepteur duis consectetur ad minim non nisi reprehenderit amet.',img_url:'https://i.imgur.com/9By4veO.jpg')

