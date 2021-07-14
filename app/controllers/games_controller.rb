class GamesController < ApplicationController

    before_action :authorized, only: [:create, :destroy]

    def create
           
        game = Game.create(games_params)
        byebug
        render json: {}
    end


    def destroy
        game = @user.games.find(params[:id])
        game.destroy
        render json: game
    end

    def index
       games = Game.all
       render json: games

    end

    def games_params
        params.permit(:players, :moves, :opening_id, :opening, :formData)
    end


end
