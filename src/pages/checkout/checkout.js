import { Component } from "react";


export default class Checkout extends Component {
    render() {
        return (
            <div class="container my-5">
                <h1 class="mb-4 text-center">Checkout</h1>
                <div class="row g-5">
                    <div class="col-md-7 col-lg-8">
                        <h4 class="mb-3">Informações de Envio e Pagamento</h4>
                        <form class="needs-validation" novalidate>
                            <div class="row g-3">
                                <div class="col-sm-6">
                                    <label for="firstName" class="form-label">Primeiro Nome</label>
                                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                                    <div class="invalid-feedback">
                                        Um nome válido é obrigatório.
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <label for="lastName" class="form-label">Sobrenome</label>
                                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                                    <div class="invalid-feedback">
                                        Um sobrenome válido é obrigatório.
                                    </div>
                                </div>

                                <div class="col-12">
                                    <label for="email" class="form-label">Email <span class="text-body-secondary">(Opcional)</span></label>
                                    <input type="email" class="form-control" id="email" placeholder="seuemail@exemplo.com" />
                                    <div class="invalid-feedback">
                                        Por favor, insira um endereço de e-mail válido para atualizações de envio.
                                    </div>
                                </div>

                                <div class="col-12">
                                    <label for="address" class="form-label">Endereço</label>
                                    <input type="text" class="form-control" id="address" placeholder="Rua, número" required />
                                    <div class="invalid-feedback">
                                        Por favor, insira seu endereço de entrega.
                                    </div>
                                </div>

                                <div class="col-12">
                                    <label for="address2" class="form-label">Endereço 2 <span class="text-body-secondary">(Opcional)</span></label>
                                    <input type="text" class="form-control" id="address2" placeholder="Apartamento ou suite" />
                                </div>

                                <div class="col-md-5">
                                    <label for="country" class="form-label">País</label>
                                    <select class="form-select" id="country" required>
                                        <option value="">Escolha...</option>
                                        <option>Brasil</option>
                                        <option>Estados Unidos</option>
                                        <option>Canadá</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Por favor, selecione um país válido.
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <label for="state" class="form-label">Estado</label>
                                    <select class="form-select" id="state" required>
                                        <option value="">Escolha...</option>
                                        <option>São Paulo</option>
                                        <option>Rio de Janeiro</option>
                                        <option>Minas Gerais</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Por favor, forneça um estado válido.
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <label for="zip" class="form-label">CEP</label>
                                    <input type="text" class="form-control" id="zip" placeholder="" required />
                                    <div class="invalid-feedback">
                                        CEP obrigatório.
                                    </div>
                                </div>
                            </div>

                            <hr class="my-4" />

                            <h4 class="mb-3">Pagamento</h4>

                            <div class="my-3">
                                <div class="form-check">
                                    <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required />
                                    <label class="form-check-label" for="credit">Cartão de Crédito</label>
                                </div>
                                <div class="form-check">
                                    <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required />
                                    <label class="form-check-label" for="debit">Cartão de Débito</label>
                                </div>
                                <div class="form-check">
                                    <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required />
                                    <label class="form-check-label" for="paypal">PayPal</label>
                                </div>
                            </div>

                            <div class="row gy-3">
                                <div class="col-md-6">
                                    <label for="cc-name" class="form-label">Nome no Cartão</label>
                                    <input type="text" class="form-control" id="cc-name" placeholder="" required />
                                    <small class="text-body-secondary">Nome completo como exibido no cartão</small>
                                    <div class="invalid-feedback">
                                        Nome no cartão é obrigatório.
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <label for="cc-number" class="form-label">Número do Cartão de Crédito</label>
                                    <input type="text" class="form-control" id="cc-number" placeholder="" required />
                                    <div class="invalid-feedback">
                                        Número do cartão de crédito é obrigatório.
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <label for="cc-expiration" class="form-label">Validade</label>
                                    <input type="text" class="form-control" id="cc-expiration" placeholder="MM/AA" required />
                                    <div class="invalid-feedback">
                                        Data de validade é obrigatória.
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <label for="cc-cvv" class="form-label">CVV</label>
                                    <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                                    <div class="invalid-feedback">
                                        Código de segurança é obrigatório.
                                    </div>
                                </div>
                            </div>

                            <hr class="my-4" />
                            <button class="w-100 btn btn-primary btn-lg" type="submit">Finalizar Compra</button>
                        </form>
                    </div>

                    <div class="col-md-5 col-lg-4 order-md-last">
                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-primary">Seu Carrinho</span>
                            <span class="badge bg-primary rounded-pill">3</span>
                        </h4>
                        <ul class="list-group mb-3">
                            <li class="list-group-item d-flex justify-content-between lh-sm align-items-center">
                                <img src="https://via.placeholder.com/80" alt="Produto 1" class="product-image rounded" />
                                <div>
                                    <h6 class="my-0">Nome do Produto 1</h6>
                                    <small class="text-body-secondary">Descrição breve do produto</small>
                                </div>
                                <span class="text-body-secondary">R$ 20,00</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-sm align-items-center">
                                <img src="https://via.placeholder.com/80" alt="Produto 2" class="product-image rounded" />
                                <div>
                                    <h6 class="my-0">Nome do Produto 2</h6>
                                    <small class="text-body-secondary">Descrição breve do produto</small>
                                </div>
                                <span class="text-body-secondary">R$ 15,00</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-sm align-items-center">
                                <img src="https://via.placeholder.com/80" alt="Produto 3" class="product-image rounded" />
                                <div>
                                    <h6 class="my-0">Nome do Produto 3</h6>
                                    <small class="text-body-secondary">Descrição breve do produto</small>
                                </div>
                                <span class="text-body-secondary">R$ 10,00</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between bg-body-tertiary">
                                <div class="text-success">
                                    <h6 class="my-0">Código de Desconto</h6>
                                    <small>EXEMPLO10</small>
                                </div>
                                <span class="text-success">−R$ 5,00</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <span>Total (BRL)</span>
                                <strong>R$ 40,00</strong>
                            </li>
                        </ul>

                        <form class="card p-2">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Código Promocional" />
                                <button type="submit" class="btn btn-secondary">Resgatar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}
