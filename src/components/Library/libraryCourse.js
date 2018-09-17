import React, { Component } from 'react';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                {/* icon component */}
                {/* arrow component */}
                {/* action button component */}
                <div className="library-course__description">
                    <label className="">Course Description</label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, perspiciatis possimus cupiditate vitae quae id dolor laborum recusandae pariatur harum.</p>
                </div>
            </div>
        );
    }
}

export default LibraryCourse;