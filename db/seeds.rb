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

game1= Game.create(name: "Thomson v. Zahid, Gibraltar, 2012", moves: "1.e4 c5 2.f4 Nc6 3.Nf3 e6 4.c3 d5 5.e5 f5 6.d4 Nh6 7.h3 Qb6 8.b3 Bd7 9.Be3 Nf7
    10.Qd2 O-O-O 11.Qf2 cxd4 12.Nxd4 Nxd4 13.Bxd4 Qc6 14.Nd2 b6 15.a4 Bc5 16.Bb5 Bxd4
    17.Qxd4 Qc5 18.Nf3 Bxb5 19.Qxc5+ bxc5 20.axb5 Kb7 21.Ke2 Ra8 22.Ra6 Rhe8
    23.Rd1 Nd8 24.Ne1 c4 25.bxc4 dxc4 26.Rd7+ Kc8 27.Rxg7 Rb8 28.Raxa7 Rxb5 29.Rac7+ Kb8
    30.Rxc4 Rb7 31.Rb4 Rxb4 32.cxb4 Nc6 33.Nd3 Re7 34.Rxe7 Nxe7 35.Nc5 Ng6 36.Nxe6 Kc8
    37.Ke3 Kd7 38.Nd4 Ne7 39.g4 Ke8 40.g5  1-0", notes: "Just when I thought I was out... They PULL me back in!", opening_id: 1)
game2= Game.create(name: "Zahid v. Thomson, Brooklyn, 2021", moves: "1.e4 c5 2.f4 e6 3.Nf3 Nc6 4.c3 d5 5.e5 f5 6.d4 Nh6 7.a3 Nf7 8.Be3 Qb6 9.Qd2 Bd7
    10.Qf2 c4 11.Bxc4 dxc4 12.d5 Qc7 13.dxc6 Bxc6 14.Bxa7 Bxf3 15.gxf3 g5 16.Be3 gxf4
    17.Bxf4 Nxe5 18.Bxe5 Qxe5+ 19.Qe2 Qxe2+ 20.Kxe2 h5 21.Nd2 Rc8 22.Rhg1 Kf7
    23.Rg2 Be7 24.Rag1 Bf6 25.Nf1 e5 26.Ne3 Ke6 27.Rd1 Rhg8 28.Rxg8 Rxg8 29.Nxc4 Rg2+
    30.Kd3 Rxh2 31.Rd2 Rh3 32.Ke2 b5 33.Ne3 Rh2+ 34.Ke1 Rxd2 35.Kxd2 Bg5 36.Ke2 Bxe3
    37.Kxe3 h4 38.Kf2 e4 39.Kg2 e3 40.Kh3 e2  0-1", notes: "Sicilian... makes me want pizza!", opening_id: 1)
game3= Game.create(name: "Thomson v. Thomson, San Francisco, 2015", moves: "1.d4 Nf6 2.c4 c5 3.d5 e5 4.Nc3 d6 5.e4 Be7 6.f4 Nfd7 7.f5 Na6 8.Nf3 Nf6 9.Be2 Bd7
    10.O-O O-O 11.Kh1 Kh8 12.a3 Qe8 13.Rb1 Bd8 14.Bd3 Ba5 15.Bd2 Rb8 16.Qe2 Bxc3
    17.Bxc3 b5 18.cxb5 Bxb5 19.Nd2 Nc7 20.Nc4 Bxc4 21.Bxc4 Nb5 22.Bd2 Nd4 23.Qd3 Nd7
    24.b4 Qe7 25.Qh3 f6 26.g4 Rbc8 27.Rbc1 Rc7 28.Rg1 cxb4 29.axb4 Rfc8 30.Ba6 Rxc1
    31.Rxc1 Rxc1+ 32.Bxc1 Nb6 33.Qc3 Qd7 34.Bf1 Na4 35.Qc4 Nb6 36.Qc3 Na4 37.Qh3 Kg8
    38.g5 Qc8 39.Qh5 fxg5 40.Bxg5 Qf8 41.Qg4 Nb6 42.Bg2 Nd7 43.Qg3 Nf6 44.Qc3 Qd8
    45.Be3 Qb6 46.Qc8+ Kf7 47.Qe6+ Kf8 48.Qc8+ Kf7  1/2-1/2", notes: "In Hebrew, 'benoni' means 'son of sorrow.'", opening_id: 3)
game4= Game.create(name: "Thomson v. Bishai; Brooklyn, 2020", moves: "1.d4 Nf6 2.Nf3 d6 3.c4 Nbd7 4.Nc3 e5 5.e4 g6 6.Be2 Bg7 7.O-O O-O 8.h3 b6
    9.Be3 Bb7 10.Qc2 exd4 11.Bxd4 Nc5 12.Bxc5 bxc5 13.e5 dxe5 14.Nxe5 Qe7 15.Bf3 Ne4
    16.Bxe4 Bxe4 17.Qxe4 Bxe5 18.Rae1 Rfe8 19.Qc2 Qg5 20.Ne2 Rad8 21.Rd1 Qf6
    22.Rxd8 Rxd8 23.b3 Qd6 24.Qe4 f5 25.Qe3 Bd4 26.Qf3 Be5 27.Qe3 Bd4 28.Qf3 Be5
    29.Qe3 Kf7 30.g3 h6 31.h4 Re8 32.Qc1 Bf6 33.Rd1 Qc6 34.Nf4 Bd4 35.Nd5 Re2
    36.Qxh6 Qe6 37.Qh7+ Kf8 38.Rxd4 cxd4 39.Qh8+ Kf7 40.Qh7+  1/2-1/2", notes: "My opponent outplayed me in the middlegame", opening_id: 7)
game5= Game.create(name: "Thomson v. Weber, Brooklyn, 2020", moves: "1.d4 Nf6 2.Nf3 g6 3.c4 Bg7 4.Nc3 O-O 5.e4 d6 6.Be2 Nbd7 7.O-O e5 8.dxe5 dxe5
    9.b3 Qe7 10.Qc2 Rd8 11.Rd1 c6 12.Bb2 Nh5 13.g3 Nf8 14.Ne1 Ne6 15.Rxd8+ Qxd8
    16.Rd1 Nd4 17.Na4 Nxe2+ 18.Qxe2 Qe7 19.Qd2 Bh3 20.Qd6 Qxd6 21.Rxd6 Bf8 22.Rd1 f6
    23.f3 Ng7 24.Kf2 Be6 25.Nc2 Kf7 26.Ba3 Bxa3 27.Nxa3 Re8 28.Ke3  1/2-1/2", notes: "I hate draws", opening_id: 7)
game6= Game.create(name: "Thomson v. Zahid, Geneva, 2021", moves: "1.d4 Nf6 2.Nf3 g6 3.Bf4 Bg7 4.Nbd2 d5 5.e3 Nbd7 6.Bd3 O-O 7.h3 Re8 8.Bh2 c5
    9.c3 a6 10.O-O b6 11.Ne5 Nxe5 12.dxe5 Nd7 13.f4 c4 14.Bc2 f5 15.Nxc4 Bb7
    16.Nd2 Qc7 17.Nf3 Nc5 18.Nd4 e6 19.g4 Qf7 20.Rf2 Kh8 21.Rg2 Rg8 22.Kh1 Rac8
    23.Qe2 Bf8 24.Rag1 Be7 25.Bd1 Ne4 26.Qe1 b5 27.a4 bxa4 28.Bxa4 Nc5 29.Bc2 a5
    30.Bg3 Ba6 31.Qa1 Ra8 32.Qd1 Rab8 33.b3 Rgc8 34.Be1 Rb7 35.h4 Rb6 36.h5 gxh5
    37.gxf5 exf5 38.Bxf5 Rf8 39.e6 Nxe6 40.Bxe6 Rxe6 41.Nxe6 Qxe6 42.Qxh5 Bd3
    43.Rg3 Be4+ 44.Kh2 Bf6 45.Qh6 Qe7 46.c4 dxc4 47.bxc4 Rb8 48.Bd2 a4 49.Bb4 Qf7
    50.Ba3 Bc3 51.Rc1 Bg7 52.Qg5 h6 53.Qg4 Kh7 54.Rd1 Bf5 55.Qe2 Rb3 56.Rdg1 Bc3
    57.e4 Rxa3 58.exf5 Rb3 59.Rc1 Rb2 60.Rc2 Rxc2 61.Qxc2 Bf6 62.c5 h5 63.Qxa4 Qe7
    64.Qd1  1-0", notes: "A great win!", opening_id: 3)
