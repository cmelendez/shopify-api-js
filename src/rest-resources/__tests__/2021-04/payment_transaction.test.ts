import {Session} from '../../../auth/session';
import {Context} from '../../../context';
import {ApiVersion} from '../../../base-types';

import {PaymentTransaction} from '../../2021-04';

describe('PaymentTransaction resource', () => {
  const domain = 'test-shop.myshopify.io';
  const headers = {'X-Shopify-Access-Token': 'this_is_a_test_token'};
  const test_session = new Session('1234', domain, '1234', true);
  test_session.accessToken = 'this_is_a_test_token';

  beforeEach(() => {
    Context.API_VERSION = ApiVersion.April21;
  });

  it('test_1', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({"transactions": [{"id": 699519475, "type": "debit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-50.00", "fee": "0.00", "net": "-50.00", "source_id": 460709370, "source_type": "adjustment", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2022-02-04T17:14:40-05:00"}, {"id": 77412310, "type": "credit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "50.00", "fee": "0.00", "net": "50.00", "source_id": 374511569, "source_type": "Payments::Balance::AdjustmentReversal", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2022-02-04T17:14:40-05:00"}, {"id": 1006917261, "type": "refund", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-3.45", "fee": "0.00", "net": "-3.45", "source_id": 1006917261, "source_type": "Payments::Refund", "source_order_id": 217130470, "source_order_transaction_id": 1006917261, "processed_at": "2022-02-03T17:14:40-05:00"}, {"id": 777128868, "type": "refund", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-8.05", "fee": "0.00", "net": "-8.05", "source_id": 777128868, "source_type": "Payments::Refund", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2022-02-03T17:14:40-05:00"}, {"id": 758509248, "type": "adjustment", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-1.50", "fee": "-0.25", "net": "-1.75", "source_id": 764194150, "source_type": "charge", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2022-02-03T17:14:40-05:00"}, {"id": 746296004, "type": "charge", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "10.00", "fee": "2.00", "net": "8.00", "source_id": 746296004, "source_type": "charge", "source_order_id": 625362839, "source_order_transaction_id": 890672011, "processed_at": "2022-02-03T17:14:40-05:00"}, {"id": 515523000, "type": "charge", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "11.50", "fee": "0.65", "net": "10.85", "source_id": 1006917261, "source_type": "Payments::Refund", "source_order_id": 217130470, "source_order_transaction_id": 1006917261, "processed_at": "2022-02-03T17:14:40-05:00"}, {"id": 482793472, "type": "adjustment", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "0.45", "fee": "0.00", "net": "0.45", "source_id": 204289877, "source_type": "charge", "source_order_id": 217130470, "source_order_transaction_id": 567994517, "processed_at": "2022-02-03T17:14:40-05:00"}, {"id": 382557793, "type": "adjustment", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "0.20", "fee": "0.00", "net": "0.20", "source_id": 204289877, "source_type": "charge", "source_order_id": 217130470, "source_order_transaction_id": 567994517, "processed_at": "2022-02-03T17:14:40-05:00"}, {"id": 201521674, "type": "refund", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-2.00", "fee": "0.00", "net": "-2.00", "source_id": 971443537, "source_type": "charge", "source_order_id": 625362839, "source_order_transaction_id": 461790020, "processed_at": "2022-02-03T17:14:40-05:00"}, {"id": 188711209, "type": "capture", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-11.37", "fee": "0.00", "net": "-11.37", "source_id": 188711209, "source_type": "charge", "source_order_id": 923751907, "source_order_transaction_id": 972637531, "processed_at": "2022-02-03T17:14:40-05:00"}, {"id": 726130462, "type": "dispute", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-11.50", "fee": "15.00", "net": "-26.50", "source_id": 598735659, "source_type": "Payments::Dispute", "source_order_id": 625362839, "source_order_transaction_id": 897736458, "processed_at": "2022-01-24T17:14:40-05:00"}, {"id": 996672915, "type": "debit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-100.00", "fee": "0.00", "net": "-100.00", "source_id": 996672915, "source_type": "Payments::Balance::AdjustmentReversal", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00"}, {"id": 843310825, "type": "charge", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "11.50", "fee": "0.63", "net": "10.87", "source_id": 843310825, "source_type": "charge", "source_order_id": 625362839, "source_order_transaction_id": 897736458, "processed_at": "2016-08-04T18:07:57-04:00"}, {"id": 841651232, "type": "debit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-100.00", "fee": "0.00", "net": "-100.00", "source_id": 841651232, "source_type": "Payments::Balance::AdjustmentReversal", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00"}, {"id": 717600021, "type": "credit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "100.00", "fee": "0.00", "net": "100.00", "source_id": 717600021, "source_type": "adjustment", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00"}, {"id": 620327031, "type": "charge", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "11.50", "fee": "0.63", "net": "10.87", "source_id": 620327031, "source_type": "charge", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00"}, {"id": 427940661, "type": "credit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "150.00", "fee": "0.00", "net": "150.00", "source_id": 427940661, "source_type": "Payments::Balance::AdjustmentReversal", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00"}, {"id": 400852343, "type": "reserve", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-42.00", "fee": "0.00", "net": "-42.00", "source_id": null, "source_type": null, "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00"}, {"id": 381560291, "type": "debit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-150.00", "fee": "0.00", "net": "-150.00", "source_id": 381560291, "source_type": "adjustment", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00"}, {"id": 357948134, "type": "charge", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "10.00", "fee": "0.46", "net": "9.54", "source_id": 971443537, "source_type": "charge", "source_order_id": 625362839, "source_order_transaction_id": 461790020, "processed_at": "2016-08-04T18:07:57-04:00"}, {"id": 250467535, "type": "reserve", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "42.00", "fee": "0.00", "net": "42.00", "source_id": null, "source_type": null, "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00"}, {"id": 217609728, "type": "charge", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "11.50", "fee": "0.00", "net": "11.50", "source_id": 930299385, "source_type": "charge", "source_order_id": 625362839, "source_order_transaction_id": 348327371, "processed_at": "2016-08-04T18:07:57-04:00"}, {"id": 138130604, "type": "credit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "150.00", "fee": "0.00", "net": "150.00", "source_id": 138130604, "source_type": "Payments::Balance::AdjustmentReversal", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00"}, {"id": 105879119, "type": "credit", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "100.00", "fee": "0.00", "net": "100.00", "source_id": 105879119, "source_type": "adjustment", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2016-08-04T18:07:57-04:00"}, {"id": 567994517, "type": "charge", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "11.50", "fee": "0.65", "net": "10.85", "source_id": 204289877, "source_type": "charge", "source_order_id": 217130470, "source_order_transaction_id": 567994517, "processed_at": "2014-01-21T13:05:38-05:00"}, {"id": 854848137, "type": "payout", "test": false, "payout_id": 623721858, "payout_status": "paid", "currency": "USD", "amount": "-41.90", "fee": "0.00", "net": "-41.90", "source_id": 623721858, "source_type": "payout", "source_order_id": null, "source_order_transaction_id": null, "processed_at": "2012-11-11T19:00:00-05:00"}]}));

    await PaymentTransaction.transactions({
      session: test_session,
      payout_id: "623721858",
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2021-04/shopify_payments/balance/transactions.json',
      query: 'payout_id=623721858',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

});