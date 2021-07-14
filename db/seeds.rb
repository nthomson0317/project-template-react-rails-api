# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

nicholas = User.create(name: 'nicholas', rating: 1750, age: 31, profile_pic: '', country: 'U.S.A.', username: 'ntntnt', password: 'abc123')
mo = User.create(name: 'mo', rating: 2000, age: 33, profile_pic: '', country: 'U.S.A.', username: 'moBamba', password: 'abc123')


# /////OPENINGS///

sicilian = Opening.create(name: 'sicilian', moves: '1.e4 c5 2.Nf3 d4', user_id: 1)
qgd = Opening.create(name: 'queens gambit declined', moves: '1.d4 d5 2.c4 e6', user_id: 2)
benoni = Opening.create(name: 'benoni', moves: '1.d4 Nf6 2.c4 c5 3.d5', user_id: 1)
london = Opening.create(name: 'london', moves: '1.d4 d5 2.Nf3 Nf6 3.Bf4', user_id: 1)
grob = Opening.create(name: 'grob', moves: '1.g4 d5 2.Bg2 Bxg4 3.c4', user_id: 2)
ruy = Opening.create(name: 'ruy lopez', moves: '1.e4 e5 2.Nf3 Nc6 3.Bb5', user_id: 2)
kid = Opening.create(name: 'kings indian', moves: '1.d4 Nf6 2.c4 g6', user_id: 1)
kings_gambit = Opening.create(name: 'kings gambit', moves: '1.e4 e5 2.f4', user_id: 2)

game1= Game.create(name: "game1", moves: "Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6", notes: "I lost the knight early...it all went downhill form there. lol", opening_id: 1)
game2= Game.create(name: "game2", moves: "Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6", notes: "I lost the pawn early...it all went downhill form there. lol", opening_id: 1)
game3= Game.create(name: "game3", moves: "Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6", notes: "I lost the bishop early...it all went downhill form there. lol", opening_id: 1)
game4= Game.create(name: "game4", moves: "Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6", notes: "I lost the queen early...it all went downhill form there. lol", opening_id: 2)
game5= Game.create(name: "game5", moves: "Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6", notes: "I lost the king early...it all went downhill form there. lol", opening_id: 2)
game6= Game.create(name: "game6", moves: "Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6", notes: "I lost the everything early...it all went downhill form there. lol", opening_id: 3)