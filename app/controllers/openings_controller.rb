class OpeningsController < ApplicationController


# Any time that you make a Fetch Request involving a User AND you include the Authorization Headers, you need this line
        # You will have acces to `@user` variable from the token
        before_action :authorized, only: [:create, :destroy]
        def create
           
            opening = @user.openings.create(openings_params)
            render json: opening
        end


        def destroy
            opening = @user.openings.find(params[:id])
            opening.destroy
            render json: opening
        end

        def index
           openings= Opening.all
           render json: openings

        end




        def openings_params
            params.permit(:name, :moves)
        end






end
