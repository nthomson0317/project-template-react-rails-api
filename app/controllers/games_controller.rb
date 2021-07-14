class GamesController < ApplicationController

    before_action :authorized, only: [:create, :destroy]

    def create
           
        game = @user.games.create(games_params)
        render json: game
    end


    def destroy
        game = @user.games.find(params[:id])
        params
        game.destroy
        render json: {}
    end

    def index
       games = Game.all
       render json: games

    end

    def games_params
        params.permit(:name, :moves, :notes)
    end


end
