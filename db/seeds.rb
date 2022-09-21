# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

admin = User.create(email: "admin@email.com", password: "superuser", username: "admin", role: "admin")
topi = User.create(email: "topi@email.com", password: "cutetopi", username: "Topi", role: "member")
hammy = User.create(email: "hammy@email.com", password: "cutehammy", username: "Hammy", role: "member")

brewery_1 = Brewery.create(name: "Mighty Squirrel", brewery_type: "contract", street: "745 Atlantic Ave", city: "Boston", state: "Massachusetts", country: "United States", postal_code: "02111-2735", website_url: "http://www.mightysquirrel.com", phone: "7602120802", obdb_id: "mighty-squirrel-boston")
brewery_2 = Brewery.create(name: "Night Shift Brewing, Inc", brewery_type: "regional", street: "87 Santilli Hwy", city: "Everett", state: "Massachusetts", country: "United States", postal_code: "02149-1906", website_url: "http://www.nightshiftbrewing.com", phone: "6172944233", obdb_id: "night-shift-brewing-inc-everett")
brewery_3 = Brewery.create(name: "Mustang Sally Brewing Co", brewery_type: "micro", street: "14140 Parke Long Ct # A-C", city: "Chantilly", state: "Virginia", country: "United States", postal_code: "20151-4009", website_url: "http://www.msbrewing.com", phone: "7033787450", obdb_id: "mustang-sally-brewing-co-chantilly")

review_1 = Review.create(rating: "⭐️⭐️⭐️⭐️⭐️", title: 'Great brewery', body: "I'm this brewery's number one fan!", brewery: brewery_1, user: User.first, username: User.first.username)
review_2 = Review.create(rating: "⭐️⭐️⭐️⭐️⭐️", title: 'Awesome Brewery', body: "You can bring your dog", brewery: brewery_2, user: User.second, username: User.second.username)
review_3 = Review.create(rating: "⭐️⭐️⭐️⭐️⭐️", title: 'Had a great time here', body: "Indoor cornhole is fun", brewery: brewery_3, user: User.third, username: User.third.username)
