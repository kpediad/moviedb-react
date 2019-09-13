class Movie < ApplicationRecord

  validates :title, presence: true, uniqueness: { scope: :release_year, message: "exists with the same release year" }
  validates :release_year, presence: true, inclusion: { in: 1895..Time.now.year, message: "needs to be between 1895 and #{Time.now.year}" }
  validates :synopsis, length: { maximum: 1000, too_long: "%{count} characters is the maximum allowed" }

end
