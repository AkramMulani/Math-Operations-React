import React from 'react'
import Videos from './Videos';

export default function Features() {
    return (
        <div className='container my-3'>
            {/* Features */}
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Basic mathematical operations</h5>
                    <small>3 days ago</small>
                    </div>
                    <p class="mb-1">Basic operations: Addition, Subtraction, Multiplication, etc.</p>
                    <small>With expressions: a+b, a-b, a*b, etc.</small>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Custom mathematical expressions</h5>
                    <small class="text-body-secondary">3 days ago</small>
                    </div>
                    <p class="mb-1">Ability to solve custom mathematical expressions defined by user.</p>
                    <small class="text-body-secondary">e.g. Power, Area of shapes, Volumes.</small>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Complex operations</h5>
                    <small class="text-body-secondary">3 days ago</small>
                    </div>
                    <p class="mb-1">Handles complex operations with variables</p>
                    <small class="text-body-secondary">e.g. Quadratic expressions, Polynomials.</small>
                </a>
            </div>
            {/* Helping Videos */}
            <Videos/>
        </div>
    );
}