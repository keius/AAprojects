class SessionsController < ApplicationController

  before_action :require_logged_out, only: [:create, :new]
  before_action :require_logged_in, only: [:destroy]

  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if user
      login!(user)
      redirect_to root_url
    else
      flash.now[:errors] = 'Invalid email or password'
      render :new
    end
  end

  def destroy
    logout!
    redirect_to new_session_url
  end

  def new
    @user = User.new
    render :new
  end

end
