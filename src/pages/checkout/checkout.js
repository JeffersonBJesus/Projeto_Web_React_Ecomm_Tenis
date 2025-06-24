import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../../context/Cart.provider'
import CardCheckout from '../../components/cardCheckoutProducts/cardCheck'
import './checkout.css'


function Checkout() {
    const { qtyCarrinho, listarCarrinho, carrinho, limparCarrinho } = useContext(CartContext)
    useEffect(() => {
        listarCarrinho()
    }, [])

    const totalCalculado = carrinho.reduce((acumulador, item) => {
        return acumulador + ((item.preco || 0) * (item.quantidade || 1));
    }, 0);


    return (
        <div className="container my-5">
            <h1 className="mb-4 text-center">Checkout</h1>
            <div className="row g-5">
                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3">Informações de Envio e Pagamento</h4>
                    <form className="needs-validation" novalidate>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label for="firstName" className="form-label">Primeiro Nome</label>
                                <input type="text" className="form-control" id="firstName" placeholder=""/>
                                <div className="invalid-feedback">
                                    Um nome válido é obrigatório.
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label for="lastName" className="form-label">Sobrenome</label>
                                <input type="text" className="form-control" id="lastName" placeholder="" />
                                <div className="invalid-feedback">
                                    Um sobrenome válido é obrigatório.
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="email" className="form-label">Email <span className="text-body-secondary">(Opcional)</span></label>
                                <input type="email" className="form-control" id="email" placeholder="seuemail@exemplo.com" />
                                <div className="invalid-feedback">
                                    Por favor, insira um endereço de e-mail válido para atualizações de envio.
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="address" className="form-label">Endereço</label>
                                <input type="text" className="form-control" id="address" placeholder="Rua, número"  />
                                <div className="invalid-feedback">
                                    Por favor, insira seu endereço de entrega.
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="address2" className="form-label">Endereço 2 <span className="text-body-secondary">(Opcional)</span></label>
                                <input type="text" className="form-control" id="address2" placeholder="Apartamento ou suite" />
                            </div>

                            <div className="col-md-5">
                                <label for="country" className="form-label">País</label>
                                <select className="form-select" id="country" >
                                    <option value="">Escolha...</option>
                                    <option>Brasil</option>
                                    <option>Estados Unidos</option>
                                    <option>Canadá</option>
                                </select>
                                <div className="invalid-feedback">
                                    Por favor, selecione um país válido.
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label for="state" className="form-label">Estado</label>
                                <br/>
                                <select className="form-select" id="state" >
                                    <option value="">Escolha...</option>
                                    <option>São Paulo</option>
                                    <option>Rio de Janeiro</option>
                                    <option>Minas Gerais</option>
                                </select>
                                <div className="invalid-feedback">
                                    Por favor, forneça um estado válido.
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label for="zip" className="form-label">CEP</label>
                                <input type="text" className="form-control" id="zip" placeholder=""  />
                                <div className="invalid-feedback">
                                    CEP obrigatório.
                                </div>
                            </div>
                        </div>

                        <hr className="my-4" />

                        <h4 className="mb-3">Pagamento</h4>

                        <div className="my-3">
                            <div className="form-check">
                                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked  />
                                <label className="form-check-label" for="credit">Cartão de Crédito</label>
                            </div>
                            <div className="form-check">
                                <input id="debit" name="paymentMethod" type="radio" className="form-check-input"  />
                                <label className="form-check-label" for="debit">Cartão de Débito</label>
                            </div>
                            <div className="form-check">
                                <input id="paypal" name="paymentMethod" type="radio" className="form-check-input"  />
                                <label className="form-check-label" for="paypal">PayPal</label>
                            </div>
                        </div>

                        <div className="row gy-3">
                            <div className="col-md-6">
                                <label for="cc-name" className="form-label">Nome no Cartão</label>
                                <input type="text" className="form-control" id="cc-name" placeholder=""  />
                                <small className="text-body-secondary">Nome completo como exibido no cartão</small>
                                <div className="invalid-feedback">
                                    Nome no cartão é obrigatório.
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label for="cc-number" className="form-label">Número do Cartão de Crédito</label>
                                <input type="text" className="form-control" id="cc-number" placeholder=""  />
                                <div className="invalid-feedback">
                                    Número do cartão de crédito é obrigatório.
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label for="cc-expiration" className="form-label">Validade</label>
                                <input type="text" className="form-control" id="cc-expiration" placeholder="MM/AA"  />
                                <div className="invalid-feedback">
                                    Data de validade é obrigatória.
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label for="cc-cvv" className="form-label">CVV</label>
                                <input type="text" className="form-control" id="cc-cvv" placeholder=""  />
                                <div className="invalid-feedback">
                                    Código de segurança é obrigatório.
                                </div>
                            </div>
                        </div>

                        <hr className="my-4" />
                        <Link to='/sucesso'><button className="w-100 btn btn-primary btn-lg" type="submit">Finalizar Compra</button></Link>
                    </form>
                </div>

                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Seu Carrinho</span>
                        <span className="badge bg-primary rounded-pill">{qtyCarrinho}</span>
                    </h4>


                        <div className="list-group list-group-flush mb-3">
                            {carrinho.map(item => (
                            <CardCheckout
                                key={item.idCarrinho || item.cod_tenis}
                                img={item.imagem}
                                modelo={item.modelo}
                                marca={item.marca}
                                preco={item.preco}
                                quantidade={item.quantidade}
                            />
                            ))}
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                                <span>Total (BRL)</span>
                                <strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalCalculado)}</strong>
                            </div>
                        </div>

                        {carrinho.length > 0 && (
                            <div className="card-footer bg-transparent pt-2 px-3 border-top-0 text-end">
                            <button className="btn btn-sm btn-outline-danger" onClick={limparCarrinho} style={{ maxWidth: '150px' }}>Limpar Carrinho</button>
                            </div>
                        )}


                </div>
            </div>
        </div>
    )


}


export default Checkout;