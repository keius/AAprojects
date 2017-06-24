class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:notice] = "Welcome!"
      redirect_to user_url(@user.id)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def new
    @user = User.new
    render :new
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render :show
    else
      flash.now[:errors] = ['Could not find Email']
      render :new
    end
  end


  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
