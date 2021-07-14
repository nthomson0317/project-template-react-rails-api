class UsersController < ApplicationController

    before_action :authorized, only: [:me]

    def me
        wristband = encode_token({user_id: @user.id})
        render json: {user: UserSerializer.new(@user), token: wristband}
    end
    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user
        else
            render json: {errors: user.errors.full_messages}
        end
    end

    def login
        user = User.find_by(username: params[:formData][:username])
        if user && user.authenticate(params[:formData][:password])
            wristband = encode_token({user_id: user.id})
            render json: {user: UserSerializer.new(user), token: wristband, openings: user.openings, games: user.games}
        else
            render json: {error: "incorrect username or password"}
        end
    end

    private

    def user_params
        params.permit(:username, :password, :name, :rating, :age, :profile_pic, :country)
    end

end
