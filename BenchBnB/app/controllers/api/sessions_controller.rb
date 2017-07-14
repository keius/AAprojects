class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if user
      login!(user)
      render 'api/user/show'
    else
      render json: ["Invalid username/password"], status: 401
    end
  end

  def destroy
    if current_user
      logout!
      render json: 'api/user/show'
    else
      render json: ["No user signed in"], status: 404
    end
  end
end